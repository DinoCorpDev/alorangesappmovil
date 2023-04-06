<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('addresses', function (Blueprint $table) {
            $table->string('name')->after('address');
            $table->string('details')->after('name')->nullable();
            $table->string('neighborhood')->after('city_id')->nullable();
            $table->integer('default_service')->after('default_billing')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('addresses', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->dropColumn('details');
            $table->dropColumn('neighborhood');
            $table->dropColumn('default_service');
        });
    }
}
