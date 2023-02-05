<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            /*$table->text('reference')->nullable()->after('shop_id');
            $table->text('currency')->nullable()->after('discount_end_date');
            $table->text('warranty_text')->nullable()->after('has_warranty');
            $table->text('shipping')->nullable()->after('num_of_sale');
            $table->text('intake')->nullable()->after('shipping');
            $table->text('material')->nullable()->after('intake');
            $table->text('unit_metering')->nullable()->after('material');
            $table->text('engaste')->nullable()->after('unit_metering');*/
            $table->text('si2')->nullable()->after('engaste');
            $table->text('medidas_de_embalaje')->nullable()->after('si2');
            $table->text('si3')->nullable()->after('medidas_de_embalaje');
            $table->text('peso_de_producto')->nullable()->after('si3');
            $table->text('si4')->nullable()->after('peso_de_producto');
            $table->text('peso_de_envio')->nullable()->after('si4');
            $table->text('tipo_de_coneccion')->nullable()->after('peso_de_envio');
            $table->text('eficiencia')->nullable()->after('tipo_de_coneccion');
            $table->text('caracteristica1')->nullable()->after('eficiencia');
            $table->text('caracteristica2')->nullable()->after('caracteristica1');
            $table->text('caracteristica3')->nullable()->after('caracteristica2');
            $table->text('caracteristica4')->nullable()->after('caracteristica3');
            $table->text('caracteristica5')->nullable()->after('caracteristica4');
            $table->text('caracteristica6')->nullable()->after('caracteristica5');
            $table->text('caracteristica7')->nullable()->after('caracteristica6');
            $table->text('caracteristica8')->nullable()->after('caracteristica7');
            $table->text('beneficio1')->nullable()->after('caracteristica8');
            $table->text('beneficio2')->nullable()->after('beneficio1');
            $table->text('beneficio3')->nullable()->after('beneficio2');
            $table->text('beneficio4')->nullable()->after('beneficio3');
            $table->text('beneficio5')->nullable()->after('beneficio4');
            $table->text('postventa')->nullable()->after('beneficio5');
            $table->text('imagen1')->nullable()->after('postventa');
            $table->text('imagen2')->nullable()->after('imagen1');
            $table->text('imagen3')->nullable()->after('imagen2');
            $table->text('imagen4')->nullable()->after('imagen3');
            $table->text('video')->nullable()->after('imagen4');
            $table->text('video2')->nullable()->after('video');
            $table->text('video3')->nullable()->after('video2');
            $table->text('video4')->nullable()->after('video3');
            $table->text('ficha_tecnica_imagen1')->nullable()->after('video4');
            $table->text('ficha_tecnica_imagen2')->nullable()->after('ficha_tecnica_imagen1');
            $table->text('ficha_tecnica_imagen3')->nullable()->after('ficha_tecnica_imagen2');
            $table->text('ficha_tecnica_imagen4')->nullable()->after('ficha_tecnica_imagen3');
            $table->text('manual_de_producto')->nullable()->after('ficha_tecnica_imagen4');
            $table->text('ficha_tecnica_del_producto')->nullable()->after('manual_de_producto');
            $table->text('manual_de_instalacion')->nullable()->after('ficha_tecnica_del_producto');
            $table->text('logo')->nullable()->after('manual_de_instalacion');
            $table->text('vida_util')->nullable()->after('logo');
            $table->text('plastico')->nullable()->after('vida_util');
            $table->text('peso_plastico')->nullable()->after('plastico');
            $table->text('carton')->nullable()->after('peso_plastico');
            $table->text('peso_carton')->nullable()->after('carton');
            $table->text('papel')->nullable()->after('peso_carton');
            $table->text('peso_papel')->nullable()->after('papel');
            $table->text('metal')->nullable()->after('peso_papel');
            $table->text('peso_metal')->nullable()->after('metal');
            $table->text('vidrio')->nullable()->after('peso_metal');
            $table->text('peso_vidrio')->nullable()->after('vidrio');
            $table->text('madera')->nullable()->after('peso_vidrio');
            $table->text('peso_madera')->nullable()->after('madera');
            $table->text('textil')->nullable()->after('peso_madera');
            $table->text('peso_textil')->nullable()->after('textil');
            $table->text('bateria_electrico')->nullable()->after('peso_textil');
            $table->text('peso_bateria_electrico')->nullable()->after('bateria_electrico');
            $table->text('impacto_ambiental')->nullable()->after('peso_bateria_electrico');
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
