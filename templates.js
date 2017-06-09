$(document).ready(function () {
    'use strict'
    var table = Handlebars.compile($('#table').html());
    var form = Handlebars.compile($('#form').html());
    //add a new name
    $('#addNew').on('click', formData);
    
    //form input
    function formData(){
        var data = {
            label: 'Names'
		};
         var html = form(data);
         $('#names').html(html);
         $('#submit').bind('click', tableData);
        }
    //table data showcase from form input
    function tableData(){
        var tData = JSON.parse(localStorage.getItem('tData'));
        if (tData === null){
            tData = [];
        }
        tData.push('#input').val();
        localStorage.setItem('tData', JSON.stringify(tData));
        var rows;
        tData.forEach(function rowShow(nameInput, index, array){
            rows += '<tr><td>' + nameInput + '</td></tr>';
        });
        
        var data = {
            name: 'Name',
            row: rows
        };
        var html = table(data);
        $('#names'.html(html));
    });



