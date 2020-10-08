<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
            'message' => "Email or Password doesn't match"
        ]);
    }
});

Route::post('/register', function (Request $request) {
    if (User::where('email', $request->email)->first() == true) {
        return response()->json([
            'status' => false,
            'message' => "You can't register with this email"
        ]);
    }
    if (User::where('username', $request->username)->first() == true) {
        return response()->json([
            'status' => false,
            'message' => "You can't register with this username"
        ]);
    }

    $request->validate([
        'name' => 'required|string',
        'email' => 'required|email|unique:users',
        'username' => 'required|string|unique:users',
        'password' => 'required|string|min:8'
    ]);

    $register = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'username' => $request->username,
        'active' => true,
        'password' => Hash::make($request->password)
    ]);

    return response()->json([
        'status' => true,
        'message' => 'Registration Successfully'
    ]);
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
