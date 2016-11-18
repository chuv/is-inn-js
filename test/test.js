const assert = require('assert')
    , isInn = require('./../isInn.js');


describe('isInn', function( ){
	describe('Отправка заведомо ложных значений', ( ) => {
		function makeTest( testData ) {
			it( `При передаче ${ testData.text } возвращает false`, function() {
			    assert.equal( false, isInn( testData.value ));
			});
		};
		[
			{
				text: "булевое значение 'false'",
				value: false
			},
			{
				text: "булевое значение 'true'",
				value: true
			},
			{
				text: "пустого массива",
				value: [ ]
			},
			{
				text: "не пустого массива",
				value: [ 11, 22, 33 ]
			},
			{
				text: "объекта",
				value: { }
			},
			{
				text: "null",
				value: null
			},
			{
				text: "пустой строки",
				value: ""
			},
			{
				text: "нуля",
				value: 0
			},
			{
				text: "передача строки содержащие символы отличные от цифр ( 10 символов )",
				value: "1234_5679"
			},
			{
				text: "передача строки содержащие символы отличные от цифр ( 12 символов )",
				value: "1234a567912"
			}
		].forEach( ( data ) => {
			makeTest( data );
		} );
	} );
	describe('Отправка валидных ИНН', ( ) => {
		function makeTest( testData ) {
			it( `При передаче ${ testData } возвращает true`, function() {
			    assert.equal( true, isInn( testData ));
			});
		};
		[
			'4200000291',
			'4205000827',
			'4205001725',
			'4205002736',
			'4205009361',
			'4205030444',
			'4205036090',
			'4205046123',
			'4205049011',
			'4205060689',
			'4205080325',
			'4205109214',
			'4207003319',
			'4207008719',
			'4207048077',
			'420900166500',
			'4209013376',
			'4209033319',
			'4212012816',
			'4216003724',
			'4217063067',
			'423001325829',
			'4234002402',
			'4238019911',
			'4243005569',
			'4246004620',
			'5405177439',
			'5407127899',
			'4206032998',
			'4206410713',
			'420700009348',
			'4207000710',
			'420700218140',
			'420700245585',
			'4207003319',
			'4207004390',
			'4207005468',
			'4207005651',
			'4207007151',
			'4207008719',
			'4207010475',
			'420800036137',
			'4208004298',
			'4208013180',
			'4208013246',
			'4208014151',
			'4208014218',
			'4209000786',
			'4209000962',
			'420900166500',
			'420900218123',
			'4209030170',
			'4209030438',
			'4209032900',
			'4209033319',
			'4209033968',
			'4210000710',
			'4210001760',
			'4210003051',
			'4210003100',
			'4210005980',
			'4211000769',
			'4212426831',
			'4212427095',
			'4212427151',
			'421300034422',
			'423001325829',
			'4230016997',
			'4230018458',
			'4230020009',
			'4230020425',
			'4230020538',
			'4230021242',
			'4230021588',
			'4247004340',
			'4247004559',
			'424750253733'

		].forEach( ( data ) => {
			makeTest( data );
		} );
	} );


	describe('Отправка НЕ валидных ИНН', ( ) => {
		function makeTest( testData ) {
			it( `При передаче ${ testData } возвращает false`, function() {
			    assert.equal( false, isInn( testData ));
			});
		};
		[
			'1234567890',
			'0987654321',
			'1234554321',
			'1115002730',
			'1115009301',
			'1110005080',
			'1111000769',
			'1112426831',
			'1112427095',
			'1112427151'

		].forEach( ( data ) => {
			makeTest( data );
		} );
	} );
});