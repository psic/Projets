function openchat(){
	//var popurl="http://www.civfanatics.com/content/chat/popupchat.php";
	//var popurl="http://embed.mibbit.com/?server=irc.irc-chat.net&channel=%23civfanatics&noServerNotices=true&noServerMotd=true&forcePrompt=true";
       //var popurl="http://wbeuk2.mibbit.com/?settings=c51ae70d311d37759447d61c944d6e80&server=irc.gamesurge.net&channel=%23civfanatics&autoConnect=true";
       var popurl="http://wbeuk2.mibbit.com/?settings=c51ae70d311d37759447d61c944d6e80&server=irc.gamesurge.net&channel=%23civfanatics&autoConnect=true";
	var winpops=window.open(popurl,"","width=705,height=500,left = 262,top = 134")
}

function openupload2(){
	var upload="uploader.php?do=editor";
	var winpops=window.open(upload,"","width=510,height=300,resizable=1,left = 262,top = 134,scrollbars=1,status=1,toolbar=0");
}