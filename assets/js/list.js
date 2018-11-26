// JavaScript Document

function writeData(index, list) {

    var text = "";
    
    for (var i=0; i<list.length; i++) {
        var j=i;

        text +=
            '<div class="none">  ' +
            '  <div class="title-day">  ' +
            '    '+list[i][2]+' ' +
            '    <span class="title-time">'+list[i][3]+' &nbsp; | &nbsp; '+list[i][4]+' </span>  ' +
            '  </div>  ' +
            '  <table border="0" cellspacing="2" cellpadding="4" class="tb-session color-'+list[i][1]+'"> ' +
            '    <thead> ' +
            '      <tr> ' +
            '        <th class="code-session tac">'+list[i][0]+'</th> ' +
            '        <th class="title-session tal">'+list[i][5]+'</th> ' +
            '      </tr> ' +
            '    </thead> ' +
            '  </table>' +
            '' +
            '  <div class="chair-box"> ' +
            '    <table border="0" cellspacing="2" cellpadding="4" class="tb-chair"> ' +
            '      <tbody> ' +
            '        <tr>' +
            '          <td class="chair ">Chair: </td>' +
            '          <td class="">'+list[i][6]+' <i>'+list[i][7]+'</i> </td>' +
            '        </tr>' +
            '      </tbody> ' +
            '    </table> ' +
            '  </div>' +
            '  <table border="0" cellspacing="2" cellpadding="2" class="tb-paper"> ' +
            '    <tbody> ' +
            '      <tr>' +
            ((index==1)?'        <td scope="col" class="th-paper tac pl-20 ">Time</td> ':'') +
            '        <td scope="col" class="th-paper tac pl-10">Paper No.</td> ' +
            '        <td scope="col" class="th-paper tal pl-40">Title / Author(s) </td> ' +
            '        <td scope="col" class="th-paper tac pdf-paper">PDF</td> ' +
            '      </tr>'
        ;

        for (j=i; true; j++) {
            text += 
                '      <tr class="line-paper">' +
                ((index==1)?'        <td valign="top" class="time-paper">'+list[j][8]+'</td> ':'') +
                '        <td valign="top" class="paper-no"><div>'+list[j][9]+'</div></td> ' +
                '        <td class="paper"> ';

                // pdf exist check.
                if (list[j][12]!="") {
                    text +=
                        '          <div><a href="../../papers/'+list[j][12]+'" target="_blank">'+list[j][10]+'</a></div> ' +
                        '          <div class="belong author">'+list[j][11]+'</div> ' +
                        '        </td> ' +
                        '        <td class="pdf-paper"><a href="../../papers/'+list[j][12]+'" target="_blank"><img src="../img/pdf.png"></a></td> ' +
                        '      </tr>'
                        ;
                } else {
                    text +=
                        '          <div>'+list[j][10]+'</div> ' +
                        '          <div class="belong author">'+list[j][11]+'</div> ' +
                        '        </td> ' +
                        '        <td class="pdf-paper"></td> ' +
                        '      </tr>'
                        ;
                }


            if (list[j+1]==null||list[j+1][0]!='') break;
        }

        text +=
            '    </tbody> ' +
            '  </table> ' +
            '  <a name="'+list[i][13]+'"></a> ' +
            '  <!-- content navi ============== -->     ' +
            '  <div class="page-nav"> ' +
            '    <a href="home.html" target="_self"><img src="../img/btn_home.gif" align="absmiddle"> HOME </a> &nbsp; ' +
            '    <a href="javascript:history.back();"><img src="../img/btn_back.gif" align="absmiddle"> BACK </a> &nbsp; ' +
            '    <a href="#top"><img src="../img/btn_top.gif" align="absmiddle"> TOP </a>' +
            '  </div>' +
            '</div>'
        ;

        i=j;
    }
	
	$(".clear").append(text);

	return text;
}