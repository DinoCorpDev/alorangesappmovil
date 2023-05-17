<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->integer('shop_id')->nullable();
            $table->text('reference')->nullable();
            $table->string('name', 200);
            $table->bigInteger('brand_id')->nullable();
            $table->string('photos', 2000)->nullable();
            $table->string('thumbnail_img', 100)->nullable();
            $table->mediumText('tags')->nullable();
            $table->longText('description')->nullable();
            $table->double('lowest_price', 20, 2)->default(0.00);
            $table->double('highest_price', 20, 2)->default(0.00);
            $table->double('discount', 20, 2)->default(0.00);
            $table->string('discount_type', 10)->default('flat');
            $table->integer('discount_start_date')->nullable();
            $table->integer('discount_end_date')->nullable();
            $table->text('currency')->nullable();
            $table->tinyInteger('stock')->default(1);
            $table->tinyInteger('published')->default(1);
            $table->string('unit', 20)->nullable();
            $table->integer('min_qty')->default(1);
            $table->integer('max_qty')->default(0);
            $table->tinyInteger('is_variant')->default(0);
            $table->tinyInteger('has_warranty')->default(0);
            $table->text('warranty_text', 1)->nullable();
            $table->mediumText('tax')->nullable();
            $table->integer('standard_delivery_time')->default(24);
            $table->integer('express_delivery_time')->default(24);
            $table->double('weight', 20, 2)->default(0.00);
            $table->double('height', 20, 2)->default(0.00);
            $table->double('length', 20, 2)->default(0.00);
            $table->double('width', 20, 2)->default(0.00);
            $table->mediumText('meta_title')->nullable();
            $table->longText('meta_description')->nullable();
            $table->integer('meta_image')->nullable();
            $table->mediumText('slug', 10);
            $table->double('rating', 8, 2)->default(0.00);
            $table->integer('num_of_sale')->default(0);
            $table->text('shipping')->nullable();
            $table->text('intake')->nullable();
            $table->text('material')->nullable();
            $table->text('unit_metering')->nullable();
            $table->text('engaste')->nullable();
            $table->text('si2')->nullable();
            $table->text('medidas_de_embalaje');
            $table->text('si3')->nullable();
            $table->text('peso_de_servicio');
            $table->text('si4')->nullable();
            $table->text('peso_de_envio');
            $table->text('tipo_de_coneccion')->nullable();
            $table->text('eficiencia')->nullable();
            $table->text('caracteristica1')->nullable();
            $table->text('caracteristica2')->nullable();
            $table->text('caracteristica3')->nullable();
            $table->text('caracteristica4')->nullable();
            $table->text('caracteristica5')->nullable();
            $table->text('caracteristica6')->nullable();
            $table->text('caracteristica7')->nullable();
            $table->text('caracteristica8')->nullable();
            $table->text('beneficio1')->nullable();
            $table->text('beneficio2')->nullable();
            $table->text('beneficio3')->nullable();
            $table->text('beneficio4')->nullable();
            $table->text('beneficio5')->nullable();
            $table->text('postventa')->nullable();
            $table->text('imagen1')->nullable();
            $table->text('imagen2')->nullable();
            $table->text('imagen3')->nullable();
            $table->text('imagen4')->nullable();
            $table->text('video')->nullable();
            $table->text('video2')->nullable();
            $table->text('video3')->nullable();
            $table->text('video4')->nullable();
            $table->text('ficha_tecnica_imagen1')->nullable();
            $table->text('ficha_tecnica_imagen2')->nullable();
            $table->text('ficha_tecnica_imagen3')->nullable();
            $table->text('ficha_tecnica_imagen4')->nullable();
            $table->text('manual_de_servicio')->nullable();
            $table->text('ficha_tecnica_del_servicio')->nullable();
            $table->text('manual_de_instalacion')->nullable();
            $table->text('logo')->nullable();
            $table->text('vida_util')->nullable();
            $table->text('plastico')->nullable();
            $table->text('peso_plastico')->nullable();
            $table->text('carton')->nullable();
            $table->text('peso_carton')->nullable();
            $table->text('papel')->nullable();
            $table->text('peso_papel')->nullable();
            $table->text('metal')->nullable();
            $table->text('peso_metal')->nullable();
            $table->text('vidrio')->nullable();
            $table->text('peso_vidrio')->nullable();
            $table->text('madera')->nullable();
            $table->text('peso_madera')->nullable();
            $table->text('textil')->nullable();
            $table->text('peso_textil')->nullable();
            $table->text('bateria_electrico')->nullable();
            $table->text('peso_bateria_electrico')->nullable();
            $table->text('impacto_ambiental')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
}
