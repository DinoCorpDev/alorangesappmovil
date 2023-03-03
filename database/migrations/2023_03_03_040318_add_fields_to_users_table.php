<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('secondName')->nullable();
            $table->string('firstLastname');
            $table->string('secondLastname');
            $table->string('documentNumber');
            $table->string('nameAdress');
            $table->string('adress');
            $table->string('aditionalAdress');
            $table->string('postalCode');
            $table->string('barrio');
            $table->string('factoryName')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('secondName');
            $table->dropColumn('firstLastname');
            $table->dropColumn('secondLastname');
            $table->dropColumn('documentNumber');
            $table->dropColumn('nameAdress');
            $table->dropColumn('adress');
            $table->dropColumn('aditionalAdress');
            $table->dropColumn('postalCode');
            $table->dropColumn('barrio');
            $table->dropColumn('factoryName');
        });
    }
}
