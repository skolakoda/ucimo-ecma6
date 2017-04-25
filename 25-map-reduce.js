/*
Povezi prva slova svake reci iz niza. Na primer: ["Hello", "Arrow", "Function"] postaje "HAF".
*/

const nizReci = ['Hello', 'Arrow', 'Function']

const rezultat = nizReci
	.map(rec => rec[0])
	.reduce((prethodno, sledece) => prethodno + sledece)

console.log(rezultat)
