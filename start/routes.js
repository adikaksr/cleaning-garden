'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('home')
// Route.on('/daftar').render('daftar') 
// Route.on('/masuk').render('masuk')
Route.on('/beranda').render('beranda')
Route.on('/layanan').render('layanan')
Route.on('/tentang').render('tentang')
Route.on('/transaksi').render('transaksi')
Route.on('/transaksi2').render('transaksi2')
Route.on('/transaksi3').render('transaksi3')
Route.on('/transaksi4').render('transaksi4')
Route.on('/selesai').render('selesai')

Route.get('/',"UserController.dashboard")
Route.get('/daftar',"UserController.daftarView")
Route.post('/daftar',"UserController.daftar")
Route.get('/masuk',"UserController.masukView")
Route.post('/masuk',"UserController.masuk")
Route.get('/keluar',"UserController.destroy")