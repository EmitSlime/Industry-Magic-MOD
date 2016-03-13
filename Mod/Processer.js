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