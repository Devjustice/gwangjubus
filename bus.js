
var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
const $url = 'http://api.gwangju.go.kr/xml/arriveInfo';
const $KEY = '';
var $station = '2873';
const $api_url = $url + '?serviceKey=' + $KEY + '&BUSTOP_ID='+$station;
//console.log($api_url);

request($api_url,function(err,res,body){





$ = cheerio.load(body);
$('ARRIVE_LIST').each(function(idx){
let line_name  = $(this).find('LINE_NAME').text();
let remain_min = $(this).find('REMAIN_MIN').text();
let arrive_flag = $(this).find('ARRIVE_FLAG').text();
console.log(`bus: ${line_name} remain: ${remain_min}m  soonarrive: ${arrive_f




});

});

~
