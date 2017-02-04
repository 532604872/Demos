var logo = [];

logolist = 
'1:case-360.png<br>\
<br>\
2:case-btb.png<br>\
<br>\
3:case-qn.png<br>\
<br>\
4:case-snyg.png<br>\
<br>\
5:case-tx.png<br>\
<br>\
6:case-zfb.png\
';

d = logolist.split('<br><br>');
for(i in d){
	logo.push({
		img : d[i].split(':')[1]
	});
	console.log(d[i].split(':')[1]);
}
delete logolist;
delete d;
delete i;