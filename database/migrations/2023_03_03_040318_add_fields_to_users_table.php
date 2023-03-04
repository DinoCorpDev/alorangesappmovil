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
            $table->string('person_type')->after('shop_id')->default('natural');
            $table->renameColumn('name', 'first_name');
            $table->string('second_name')->after('name')->nullable();
            $table->string('first_lastname')->after('second_name');
            $table->string('second_lastname')->after('first_lastname');
            $table->string('document_type')->after('second_lastname');
            $table->string('document_number')->after('document_type');
            $table->string('company_name')->after('document_number')->nullable();
            $table->string('company_type')->after('company_name')->nullable();
            $table->string('company_document_type')->after('company_type')->nullable();
            $table->string('company_document_number')->after('company_document_type')->nullable();
            $table->string('address')->after('company_document_number');
            $table->string('address_name')->after('address')->nullable();
            $table->string('address_details')->after('address_name')->nullable();
            $table->integer('country_id')->after('address_details');
            $table->integer('state_id')->after('country_id');
            $table->integer('city_id')->after('state_id');
            $table->string('town')->after('city_id');
            $table->string('postal_code')->after('town');
            $table->integer('policies_and_cookies_consent')->after('phone')->default(0);
            $table->integer('offers_consent')->after('policies_and_cookies_consent')->default(0);
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
            $table->dropColumn('person_type');
            $table->renameColumn('first_name', 'name');
            $table->dropColumn('second_name');
            $table->dropColumn('first_lastname');
            $table->dropColumn('second_lastname');
            $table->dropColumn('document_type');
            $table->dropColumn('document_number');
            $table->dropColumn('company_name');
            $table->dropColumn('company_type');
            $table->dropColumn('company_document_type');
            $table->dropColumn('company_document_number');
            $table->dropColumn('address');
            $table->dropColumn('address_name');
            $table->dropColumn('address_details');
            $table->dropColumn('country_id');
            $table->dropColumn('state_id');
            $table->dropColumn('city_id');
            $table->dropColumn('town');
            $table->dropColumn('postal_code');
            $table->dropColumn('policies_and_cookies_consent');
            $table->dropColumn('offers_consent');
        });
    }
}
