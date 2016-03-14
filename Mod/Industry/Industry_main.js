//グローバル変数
var IMMachine=[];
var IMPipe=[];
var IMActiveMachine=[];
var IMActivePipe=[];
var ENERGY={
addMachineBlock:function(Blockid,Damageid,Maxpj,Usedpe){
stat={BlockID:Blockid,
DamageID:Damageid,
MaxPJ:Maxpj,
UsedPE:Usedpe};
IMMachine.push(stat);
},
addPipeBlock:function(Blockid,Damageid,Maxpj,Usedpe){
stat={BlockID:Blockid,
DamageID:Damageid,
MaxPJ:Maxpj,
UsedPE:Usedpe};
IMPipe.push(stat);
},
pushSidePE:function(ax,ay,az,bx,by,bx){
	aID=getTile(ax,ay,az);
	bID=getTile(bx,by,bz);
	aFlag=0;
	bFlag=0;
	var aPJ,bPJ;
	for(a=0;a<IMMachine.length;a++){
		if(aID==IMMachine[a]["BlockID"]){
			aFlag=1;
			aPJ=IMMachine[a]["MaxPJ"];
		}
		if(bID==IMMachine[a]["BlockID"]){
			bFlag=1;
			bPJ=IMMachine[a]["MaxPJ"];
		}
	}
	for(b=0;b<IMPipe.length;b++){
		if(aID==IMMachine[b]["BlockID"]){
			aFlag=2;
			aPJ=IMPipe[b]["MaxPJ"];
		}
		if(bID==IMMachine[b]["BlockID"]){
			bFlag=2;
			bPJ=IMPipe[b]["MaxPJ"];
		}
	}
},
setMachine:function(x, y, z,id,side){
switch(side){
case 0:
var ax=x,ay=y-1,az=z;
setTile(ax,ay,az,Itemid,itemDamage);
stat={X:ax,Y:ay,Z:az,ID:id,STAT:true};
IMActiveMachine.push(stat);
break;
case 1:
var ax=x,ay=y+1,az=z;
setTile(ax,ay,az,Itemid,itemDamage);
stat={X:ax,Y:ay,Z:az,ID:id,STAT:true};
IMActiveMachine.push(stat);
break;
case 2:
var ax=x,ay=y,az=z-1;
setTile(ax,ay,az,Itemid,itemDamage);
stat={X:ax,Y:ay,Z:az,ID:id,STAT:true};
IMActiveMachine.push(stat);
break;
case 3:
var ax=x,ay=y,az=z+1;
setTile(ax,ay,az,Itemid,itemDamage);
stat={X:ax,Y:ay,Z:az,ID:id,STAT:true};
IMActiveMachine.push(stat);
break;
case 4:
var ax=x-1,ay=y,az=z;
setTile(ax,ay,az,Itemid,itemDamage);
stat={X:ax,Y:ay,Z:az,ID:id,STAT:true};
IMActiveMachine.push(stat);
break;
case 5:
var ax=x+1,ay=y,az=z;
setTile(ax,ay,az,Itemid,itemDamage);
stat={X:ax,Y:ay,Z:az,ID:id,STAT:true};
IMActiveMachine.push(stat);
break;
}
}
};


 function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage){
for(a=0;a<IMMachine.length;a++){
if(itemid==IMMachine[a]["BlockID"]&itemDamage==IMMachine[a]["DamageID"]){
preventDefault();
ENERGY.setMachine(x, y, z,a,side);
}
}
}