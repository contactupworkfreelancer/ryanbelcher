<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPaidToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        $table->string('rating');
        $table->string('refrences');
        $table->integer('usertype');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
         $table->dropColumn('rating');
         $table->dropColumn('refrences');
         $table->dropColumn('usertype');
    }
}
