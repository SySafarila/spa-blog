<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json($request->user());
});

Route::post('/login', function (Request $request) {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        // Authentication passed...
        return response()->json([
            'status' => true,
            'message' => 'Login successfully.'
        ]);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Login failed'
        ]);
    }
});

Route::get('/auth/check', function () {
    $auth = Auth::check();
    if ($auth == true) {
        return response()->json([
            'status' => true,
            'message' => 'Authenticated'
        ]);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Not authenticated'
        ]);
    }
});

Route::post('/logout', function () {
    Auth::logout();
    return response()->json([
        'status' => true,
        'message' => 'Logout successfully'
    ]);
});
