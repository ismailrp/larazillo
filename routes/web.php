<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\IndexController;

Route::get('/index', [IndexController::class, 'index']);
Route::get('/show', [IndexController::class, 'show']);


Route::get('/', function () {
    return Inertia::render('Home', [
        'message' => 'Laravel 12 + Inertia + Vue'
    ]);
});


Route::get('/test-inertia', function () {
    return Inertia::render('Test', [
        'name' => 'Inertia OK'
    ]);
});