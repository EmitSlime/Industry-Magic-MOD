var OldVersion=0;
var NewVersion="https://raw.githubusercontent.com/EmitSlime/Industry-Magic-MOD/master/Mod/System/NewVersion.txt";
var Update=AutoUpdates(OldVersion,NewVersion);

if(Update)
{
	print("新しいバージョンがあります");
}else
{
	print("このバージョンは最新です");
}