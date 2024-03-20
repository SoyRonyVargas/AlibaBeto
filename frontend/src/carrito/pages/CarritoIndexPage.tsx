/* eslint-disable @typescript-eslint/no-explicit-any */
import PaymentForm from '../components/PaymentForm'
import { Elements } from '@stripe/react-stripe-js'
import MainLayout from '../../layouts/MainLayout'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51OwOXeBLBF0dttMQtVfyklMPuP2gFw1xddFySA3DElUfeFUJJ3Miw81vPIfK9NJBP473EViZHhVcWcY4aRVW4Utx00qRnyPmOP');

const CarritoIndexPage = () => {

    const options: any = {
        mode: 'payment',
        amount: 1099,
        currency: 'mxn',
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
        // clientSecret: 'sk_test_51OwOXeBLBF0dttMQTinEW3nY37amJ8wK5sIdaOn72f7hApfMViPuNGDo0IOEPuYElTo9IGVcdSfNIev9TeCkErti00twtA0Zai'
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <MainLayout>

                <div className="px-6 md:px-0 min-h-[80vh]">

                    <div className="my-8">
                        <h2 className="text-2xl font-bold">
                            Carrito de compras
                        </h2>

                        <PaymentForm />

                    </div>

                </div>

            </MainLayout>
        </Elements>
    )
}

export default CarritoIndexPage