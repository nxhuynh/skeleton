pragma solidity ^0.4.18;

contract LinkedList {

  event AddEntry(bytes32 head,string longitude,string latitude,uint day,uint month,uint year,bytes32 licence,bytes32 next);

  uint public length = 0;//also used as nonce

  struct Object{
    bytes32 next;
    string longitude;
    string latitude;
    uint day;
    uint month;
    uint year;
    bytes32 licence;
  }

  bytes32 public head;
  mapping (bytes32 => Object) public objects;

  function LinkedList() public {}

  function addEntry(string _longitude, string _latitude, uint _day, uint _month, uint _year, bytes32 _licence) public returns (bool){
    Object memory object = Object(head,_longitude,_latitude,_day,_month,_year,_licence);
    bytes32 id = keccak256(object.longitude,object.latitude,object.day,object.month,object.year,object.licence,now,length);
    objects[id] = object;
    head = id;
    length = length+1;
    AddEntry(head,object.longitude,object.latitude,object.day,object.month,object.year,object.licence,object.next);
  }

  //needed for external contract access to struct
  function getEntry(bytes32 _id) public returns (bytes32,string,string,uint,uint,uint,bytes32) {
    return (objects[_id].next,objects[_id].longitude,objects[_id].latitude,objects[_id].day,objects[_id].month,objects[_id].year,objects[_id].licence);
  }

}
