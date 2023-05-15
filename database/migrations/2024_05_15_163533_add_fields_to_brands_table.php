<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToBrandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('brands', function (Blueprint $table) {
            $table->string('biografia')->after('sales_amount')->nullable();
            $table->string('banner')->after('biografia')->nullable();
            $table->string('pais')->after('banner')->nullable();
            $table->string('fundacion')->after('banner')->nullable();
            $table->string('ensamblado')->after('fundacion')->nullable();
            $table->string('segmento1')->after('ensamblado')->nullable();
            $table->string('segmento2')->after('segmento1')->nullable();
            $table->string('segmento3')->after('segmento2')->nullable();
            $table->string('segmento4')->after('segmento3')->nullable();
            $table->string('linea1')->after('segmento4')->nullable();
            $table->string('linea2')->after('linea1')->nullable();
            $table->string('linea3')->after('linea2')->nullable();
            $table->string('linea4')->after('linea3')->nullable();
            $table->string('diseno')->after('linea4')->nullable();
            $table->string('resumen')->after('diseno')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('brands', function (Blueprint $table) {
            $table->dropColumn('biografia');
            $table->dropColumn('banner');
            $table->dropColumn('pais');
            $table->dropColumn('fundacion');
            $table->dropColumn('ensamblado');
            $table->dropColumn('segmento1');
            $table->dropColumn('segmento2');
            $table->dropColumn('segmento3');
            $table->dropColumn('segmento4');
            $table->dropColumn('linea1');
            $table->dropColumn('linea2');
            $table->dropColumn('linea3');
            $table->dropColumn('linea4');
            $table->dropColumn('diseno');
            $table->dropColumn('resumen');
            
        });
    }
}
