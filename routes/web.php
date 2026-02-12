<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/', function () {
    return Inertia::render('Home', [
        'message' => 'Laravel 12 + Inertia + Vue'
    ]);
});