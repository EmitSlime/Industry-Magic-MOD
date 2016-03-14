//プロセッサーファイルです

/*組み込み関数等を利用する場合はこちらに書いてください
 *ファイルを分けた理由としては、jsを全体的にまとめるため、
 *最初に読み込むファイルとして分ける感じです。
 *早い話、C/C++のヘッダファイルみたいなものです。
 */

var DATA = function (){
	var sdPath = android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftWorlds";

	this.save(fileName, data){
		with(JavaImporter(java.io)){
			try{
				var str = data;
				if(typeof data != "string"){
					str = JSON.stringify(data);
				}
				var file = new File(sdPath + Level.getWorldDir() + fileName);
				//ファイルが存在しなければ作る
				if(!file.exists()){
					file.createNewFile();
				}else{
					var fWriter = new FileWriter(file);
					fWriter.write(str);
					fWriter.close();
				}
			}catch(error){
				print(error);
			}
		}
	}

	this.load(fileName){
		with(JavaImporter(java.io)){
			try{
				var file = new File(sdPath + Level.getWorldDir() + fileName);
				//ファイルが存在しないならnullを返す
				if(!file.exists()){
					return null;
				}else{
					var fReader = new FileReader(file);
					var strBuilder = new java.lang.StringBuilder();
					var h;
					while((h = fr.read()) != -1){
						strBuilder.append(new java.lang.Character(h));
					}
					fReader.close();
					var str = strBuilder;
					strBuilder.close();
					return JSON.parse(str);
				}
			}catch(error){
				print(error);
			}
		}
	}

}




function AutoUpdates(Old,New)
{
	new java.lang.Thread
	(
		function()
		{
			android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
			var txt=new java.io.ByteArrayOutputStream();
			android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet(New)).getEntity().writeTo(txt);
			txt.close();
			var NewVersion=parseFloat(String(txt.toString()));
			if(NewVersion>Old)
			{
				return true;
			}else
			{
				return false;
			}
		}
	).start();
}




var Modpe_takedake_EXPandLEVEL=(function(){
	var EXP=0,
	LEVEL=1,
	ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
	File=java.io.File,
	FileWriter=java.io.FileWriter,
	FileReader=java.io.FileReader,
	BufferedReader=java.io.BufferedReader,
	di=android.os.Environment.getExternalStorageDirectory();
	return {
		GetEXP:function(){
			return EXP;
		},
		SetEXP:function(Num){
			EXP=Num;
		},
		GetLEVEL:function(){
			return LEVEL;
		},
		SetLEVEL:function(Num){
			LEVEL=Num;
		},
		SaveEXP:function(){
			try{
				EXPFile=new File(di.getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/EXPFile.txt");
				EXPFile.createNewFile();
				EXPFileWriter=new FileWriter(EXPFile,false);
				EXPFileWriter.write(String(EXP));
				EXPFileWriter.close();
			}catch(er){print(er);}
		},
		LoadEXP:function(){
			try{
				EXPFile=new File(di.getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/EXPFile.txt");
				br=new BufferedReader(new FileReader(EXPFile));
				str=br.readLine();
				br.close();
				EXP=Number(str);
				return Number(str);
			}catch(er){print(er);}
		},
		SaveLEVEL:function(){
			try{
				LEVELFile=new File(di.getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/LEVELFile.txt");
				LEVELFile.createNewFile();
				LEVELFileWriter=new FileWriter(LEVELFile,false);
				LEVELFileWriter.write(String(EXP));
				LEVELFileWriter.close();
			}catch(er){print(er);}
		},
		LoadLEVEL:function(){
			try{
				LEVELFile=new File(di.getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/LEVELFile.txt");
				br=new BufferedReader(new FileReader(LEVELFile));
				str=br.readLine();
				br.close();
				LEVEL=Number(str);
				return Number(str);
			}catch(er){print(er);}
		},
		GetEXPFile:function(){
			try{
				EXPFile=new File(di.getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/EXPFile.txt");
				if(EXPFile.exists()){
					return true;
				}else{return false;}
			}catch(er){print(er);}
		},
		GetLEVELFile:function(){
			try{
				LEVELFile=new File(di.getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/LEVELFile.txt");
				if(LEVELFile.exists()){
					return true;
				}else{return false;}
			}catch(er){print(er);}
		},
		EXPRandom:function(min,max){
			ran=Math.floor(Math.random()*(max-min+1))+min;
			EXP=EXP+ran;
			return ran;
		},
		EXPUp:function(Num){
			EXP=EXP+Num;
		},
		LEVELRandom:function(min,max){
			ran=Math.floor(Math.random()*(max-min+1))+min;
			LEVEL=LEVEL+ran;
			return ran;
		},
		LEVELUp:function(Num){
			LEVEL=LEVEL+Num;
		},
		RandomTiming:function(Num){
			if(Math.floor(Math.random()*(100/Num))+1<=1){
				return true;
			}else{return false;}
		},
		ResetEXP:function(){
			EXP=0;
		},
		ResetLEVEL:function(){
			LEVEL=0;
		},
		ResetALL:function(){
			EXP=0;
			LEVEL=1;
		}
	}
})();