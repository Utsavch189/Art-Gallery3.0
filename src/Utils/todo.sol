// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Todo{

    uint ids=0;

    struct Uploads{
        uint id;
        string description;
        string uri;
        uint timstamp;
        address own;
        string types;
    }

    mapping(uint => address)owner;

    Uploads[] private uploads;

    function upload(string memory _uri,string memory _desc,string memory _type)public {
        owner[ids]=msg.sender;
        uploads.push(Uploads(ids,_desc,_uri,block.timestamp,msg.sender,_type));
        ids=ids+1;
    }

    function deletes(uint _id)public {
        uploads[_id]=uploads[uploads.length-1];
        uploads.pop();
    }

    function getAllMyUploads()public view returns(Uploads[] memory){
        Uploads[] memory temp=new Uploads[](uploads.length);
        uint x=0;
        for(uint i=0;i<uploads.length;i++){
            if(owner[i]==msg.sender){
                temp[x]=uploads[i];
                x++;
            }
        }
        Uploads[] memory res=new Uploads[](x);
        for(uint i=0;i<x;i++){
            res[i]=temp[i];
        }
        return res;
    }

    function getAllUploads()public view returns(Uploads[] memory){
        Uploads[] memory res=new Uploads[](uploads.length);
        for(uint i=0;i<uploads.length;i++){    
                res[i]=uploads[i];

        }
        return res;
    }

}