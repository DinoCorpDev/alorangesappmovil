<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMoreFieldsToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table
                ->text('reference')
                ->nullable()
                ->after('shop_id');
            $table
                ->text('currency')
                ->nullable()
                ->after('discount_end_date');
            $table
                ->text('warranty_text')
                ->nullable()
                ->after('has_warranty');
            $table
                ->text('shipping')
                ->nullable()
                ->after('num_of_sale');
            $table
                ->text('intake')
                ->nullable()
                ->after('shipping');
            $table
                ->text('material')
                ->nullable()
                ->after('intake');
            $table
                ->text('unit_metering')
                ->nullable()
                ->after('material');
            $table
                ->text('engaste')
                ->nullable()
                ->after('unit_metering');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('reference');
            $table->dropColumn('currency');
            $table->dropColumn('warranty_text');
            $table->dropColumn('shipping');
            $table->dropColumn('intake');
            $table->dropColumn('material');
            $table->dropColumn('unit_metering');
            $table->dropColumn('engaste');
        });
    }
}
