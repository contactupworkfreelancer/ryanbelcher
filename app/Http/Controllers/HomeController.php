<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    //echo "<pre> Data : ".print_r(Auth::user(), TRUE)."</pre>";

    if (Auth::user()->usertype == 1) {
        return view('dashboard');
    }
      //$id = Auth::user()->usertype;
      //echo "<pre> Data : ".print_r($id, TRUE)."</pre>";

   //die();
      return view('home');
    }
}
