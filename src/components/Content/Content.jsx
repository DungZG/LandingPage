import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { useSpring, animated } from "react-spring";
import checkIconMobile from '../../assets/mobile/checkpoint.svg'
const Contents = () => {
    const customer = useSpring({ customers: 10245, from: { customers: 0 } });
    const card = useSpring({ cards: 12045, from: { cards: 0 } });
    return (
        <section className="md:flex md:flex-row">
            <div className="ml-[70px] mr-[54px] font-bold flex flex-col items-center bg-gradient-to-b from-white/40 rounded-[24px] to-transparent shadow-md md:w-[20%]">
                <div className="flex items-start gap-8 mt-16">
                    <FaUser size={"22px"} className="mt-[12px] " />
                    <div className="text-26">
                        <animated.div>
                            {customer.customers.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="font-semibold text-13 mb-[36px] md:text-16">Customers</p>
                    </div>
                </div>
                <div className="flex items-start gap-8">
                    <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
                    <div className="text-26">
                        <animated.div>
                            {card.cards.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="font-semibold text-13 md:text-16"> Cards Issued</p>
                    </div>
                </div>
            </div>
            <div className="text-13 flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:text-16 md:ml-[20%] md:mt-0">
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>Card Reports sent to your phone every weeks</p>
                </div>
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>No External fees</p>
                </div>
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>Set spending limits and restrictions</p>
                </div>
            </div>
        </section>
    );
};

export default Contents;
