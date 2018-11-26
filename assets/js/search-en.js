

Array.prototype.unique = function() {
	var a = {};
	
	for(var i=0; i<this.length; i++)
	{
		if(typeof a[this[i]] == "undefined")
			a[this[i]] = 1;
	}
	
	this.length = 0;
	
	for(var i in a)
		this[this.length] = i;
	
	return this;
}


String.prototype.replaceAddStrong = function(str) {
	var re = new RegExp(str, "ig");
	var tempArray = this.match(re);
	var strReturn = this;
	
	if (tempArray != null) 
	{
		tempArray.unique();
		
		for(i=0;i < tempArray.length;i++)
			strReturn = strReturn.replace(eval("/"+tempArray[i]+"/g"),"<b><font color=red>"+tempArray[i]+"</font></b>");
	}
	
	return strReturn;
}


function send()
{
	$("#content-scroll").scrollTop(0);
	
	var t = $("#search_txt").val();
	var t2 = t.toLowerCase();

	if (t.length < 2) {
		alert('Please input more than 2 letters.');
		return ;
	}

	var text = "";
	var count = 0;	
	
	if( t.replace(/(^\s*)|(\s*$)/gi, "") )
	{

		var dbList = [DB,PS];

		for (var k=0; k<dbList.length; k++) {
			var ts = false;
			var TS = dbList[k];
	
			var list = new Array();

			//---------- TS -----------------------
			for (var i=0; i<TS.length; i++) {
				var temp0  = TS[i][0];
				var temp1  = TS[i][1];
				var temp2  = TS[i][2];
				var temp3  = TS[i][3];
				var temp4  = TS[i][4];
				var temp5  = TS[i][5].replaceAddStrong(t);
				var temp6  = TS[i][6].replaceAddStrong(t);
				var temp7  = TS[i][7].replaceAddStrong(t);
				var temp13  = TS[i][13];

				var index5 = TS[i][5].toLowerCase().indexOf(t2);
				var index6 = TS[i][6].toLowerCase().indexOf(t2);
				var index7 = TS[i][7].toLowerCase().indexOf(t2);
				
				if(index5 != -1 
					|| index6 != -1 
					|| index7 != -1 ) {
						count += 1;
				}

				var isExist = false;

				var j = i;

				for (; TS[j+1]!=null; j++) {
					var index10  = TS[j][10].toLowerCase().indexOf(t2);
					var index11  = TS[j][11].toLowerCase().indexOf(t2);

					
					if(((index5 == -1 && index6 == -1 && index7 == -1) || i!=j) && (index10 != -1 || index11 != -1 )) {
						count += 1;
					}

					if(index5 != -1 
						|| index6 != -1 
						|| index7 != -1 
						|| index10 != -1 
						|| index11 != -1) {
						var data = new Array();

						data[8]  = TS[j][8];
						data[9]  = TS[j][9];
						data[10] = TS[j][10].replaceAddStrong(t);
						data[11] = TS[j][11].replaceAddStrong(t);
						data[12] = TS[j][12];

						if (isExist) {
							data[0]  = TS[j][0];
							data[1]  = TS[j][1];
							data[2]  = TS[j][2];
							data[3]  = TS[j][3];
							data[4]  = TS[j][4];
							data[5]  = TS[j][5];
							data[6]  = TS[j][6];
							data[7]  = TS[j][7];
							data[13]  = TS[j][13];
						} else {
							isExist = true;
							data[0]  = temp0;
							data[1]  = temp1;
							data[2]  = temp2;
							data[3]  = temp3;
							data[4]  = temp4;
							data[5]  = temp5;
							data[6]  = temp6;
							data[7]  = temp7;
							data[13]  = temp13;
						}

						list.push(data);
						ts = true;
					}

					if (TS[j+1]==null || TS[j+1][1]!='') {
						break;
					}
				}

				i=j;
			}

			if (ts) {
				text += writeData(k+1,list);
				// count += list.length;
			}
		}

	    $("#search_num_area").html(
		    '<div class="search-msg mt-10">' +
	        '    		<div class="">' +
	        '				<span class="mt-30"><span class="blue"> ' + count + '&nbsp; </span> items found for&nbsp; \' <span class="red">' + t + '</span></span> \' ' +
	        '			</div>' +
	        '</div>'
		);

		if( count > 0 )
	    {	
	    	$(".list_content1").html( text );
	    	$(".list_header, .list_content1").show();
	    }	
	    else 
	    	$(".list_header, .list_content1").hide();
	}
	else 
	{	
		alert('Please input more than 2 letters.');
		$("#search_txt").val('').focus();
	}	
}

function searchEnter()
{
	if( event.keyCode == 13 )
		send();
}



