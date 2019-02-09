
var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
const $url = 'http://api.gwangju.go.kr/xml/arriveInfo';
const $KEY = '6LlkzoJWKU8inq318FaLpoJU5DnMfCKiuOPaMndL6EhljQAuXZe0%2FUNe0WSAuygwcdufjkYBudRsGHqVmeucyw%3D%3D'; /* Service Key*/
var $station = '2873';
const $api_url = $url + '?serviceKey=' + $KEY + '&BUSTOP_ID='+$station;
//console.log($api_url);







var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'wjddmldls',
    password : 'wjddmldls',
    database : 'bus'

});

request($api_url,function(err,res,body){





$ = cheerio.load(body);
$('ARRIVE_LIST').each(function(idx){
let line_name  = $(this).find('LINE_NAME').text();
let remain_min = $(this).find('REMAIN_MIN').text();
let arrive_flag = $(this).find('ARRIVE_FLAG').text();
console.log(`bus: ${line_name} remain: ${remain_min}m  soonarrive: ${arrive_flag}`);




});

});





var sql = 'INSERT INTO ARRIVE_LIST (LINE_NAME, REMAIN_MIN, ARRIVE_FLAG) VALUES(`${line_name}, `${remain_min}` , `${arrive_flag}`)';
var sql = 'SELECT * FROM ARRIVE_LIST';
connection.query(sql, function (err, rows, fields) {
  if (err) console.log(err);
  console.log('rows', rows); //row는 배열이다.
  console.log('fields', fields); //fields는 컬럼을 의미한다.
});

connection.end();//접속이 끊긴다.

