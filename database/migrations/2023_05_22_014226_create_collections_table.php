<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCollectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collections', function (Blueprint $table) {
            $table->increments('id');
            $table->string('referencia')->nullable();
            $table->string('coleccion')->nullable();
            $table->string('categoria')->nullable();
            $table->string('subcategoria')->nullable();
            $table->string('slug')->nullable();
            $table->string('marca')->nullable();
            $table->string('precio')->nullable();
            $table->string('descuento')->nullable();
            $table->string('divisa')->nullable();
            $table->string('stock')->nullable();
            $table->string('garantia')->nullable();
            $table->string('envio')->nullable();
            $table->string('descripcion')->nullable();
            $table->string('material')->nullable();
            $table->string('medida_de_proyecto')->nullable();
            $table->string('si1')->nullable();
            $table->string('aforo')->nullable();
            $table->string('diagrama_proyecto')->nullable();
            $table->string('postventa')->nullable();
            $table->string('imagen1')->nullable();
            $table->string('imagen2')->nullable();
            $table->string('imagen3')->nullable();
            $table->string('imagen4')->nullable();
            $table->string('video1')->nullable();
            $table->string('video2')->nullable();
            $table->string('video3')->nullable();
            $table->string('video4')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('collections');
    }
}
