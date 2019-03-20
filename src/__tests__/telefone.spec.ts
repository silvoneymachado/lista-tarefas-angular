import { Telefone } from "../telefone";
import { DDD } from "../ddd";

describe( 'telefone', () => {

    it( 'retorna um número completo', () => {
        const t = new Telefone( '22334455', new DDD( '22' ) );
        expect( t.completo() ).toEqual( '(22) 22334455' );
    } );

} );