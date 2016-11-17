<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
      echo "<pre> Data : ".print_r(Auth::user()->id, TRUE)."</pre>";
      $id = Auth::user()->id;
      echo "<pre> Data : ".print_r($id, TRUE)."</pre>";
$currentuser = User::find($id);
echo "<pre> Data : ".print_r($currentuser, TRUE)."</pre>";
$usergroup = $currentuser->user_group;
echo "<pre> Data : ".print_r($usergroup, TRUE)."</pre>";
   die();
    //    return view('home');
    }
}
