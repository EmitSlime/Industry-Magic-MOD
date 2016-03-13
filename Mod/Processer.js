//プロセッサーファイルです

/*組み込み関数等を利用する場合はこちらに書いてください
 *ファイルを分けた理由としては、jsを全体的にまとめるため、
 *最初に読み込むファイルとして分ける感じです。
 *早い話、C/C++のヘッダファイルみたいなものです。
 */

var DATA = (function (){
	var sd = android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftWorlds";
	
	this.save(filename, data){
		with(JavaImporter(java.io)){
			try{
				var str = "";
				if(typeof str != "string"){
				 str = JSON.stringify(data);
				}
				var file = new File(sd+Level.getWorldDir()+filename);
				if(!file.exists()){
					file.createNewFile();
				}else{
					var fw = new FileWriter(file);
					fw.write(str);
					fw.close();
				}
			}catch(e){print(e);}
		}
	}
	
	this.load(filename){
		with(JavaImporter(java.io)){
			try{
				var file = new File(sd+Level.getWorldDir()+filename);
				if(!file.exists()){
					return null;
				}else{
					var fr = new FileReader(file);
					var sb = new java.lang.StringBuilder();
					var h;
					while((h = fr.read())!=-1) sb.append(new java.lang.Character(h));
					fr.close();
					var str = sb;
					sb.close();
					return JSON.parse(str);
				}
			}catch(e){print(e);}
		}
	}
	
})();