import React from 'react';

const HowToBuy = () => {
    return (
        <section className="page-how-to-buy container content-box mt-5" id="howToBuy">
            <div className="box ">
             
                <div className="flex flex-wrap ">
                    <div className="sm:mb-12 mt-5 p-3 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                        <h2 className='text-[#f1552c] mb-5 text-center'>

                            HOW TO BUY
                        </h2>
                        <p className='text-[#ffffff] fs-5 mx-3' style={{ lineHeight: "30px" }}>
                            To invest in DeFi, first, get the tokens you need from Arbitrum Smart Chain. You will need ETH (ERC20) to be able to buy. Then you need a wallet with a dapp browser to be able to trade tokens in Decentralised Finance Institute Swaps. Wallets endorsed are Trust Wallet for mobile and Metamask for desktop. Once you have the tokens and the wallet, you can venture safely into the Decentralised Finance Institute Swaps ecosystem.
                        </p>
                    </div>
                    <div className=" sm:mb-12 mt-5 p-3 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                        <h3 className="text-[#fcd227] fs-5 text-center mb-5">QUICK START GUIDE</h3>
                        <ol className="steps">
                            <li className="step">
                                <h4 className='text-[#f1552c]'>Create Web3 wallets</h4>
                                <p className="text-[#ffffff] fs-6">Register on Mata Mask or other Wallets through app or browser</p>
                            </li>
                            <li className="step">
                                <h4 className='text-[#f1552c]'>Send ETH to your wallet</h4>
                                <p className="text-[#ffffff] fs-6"> Add ETH to your Wallet</p>
                            </li>
                            <li className="step">
                                <h4 className='text-[#f1552c]'>Connect your wallet to Uniswap</h4>
                                <p className="text-[#ffffff] fs-6">Browse your wallet and connect it with Uniswap.org</p>
                            </li>
                            <li className="step">
                                <h4 className='text-[#f1552c]'>Swap ETH for Decentralised Finance Institute</h4>
                                <p className="text-[#ffffff] fs-6 " >
                                    Now go to trade and exchange ETH to Decentralised Finance Institute
                                    <br />
                                    {/* You will get LP tokens through staking BFGY / ETH tokens in Liquidity Pools. Stake BFGY / ETH pair to
                                    earn tokens in Uniswap */}
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HowToBuy;
