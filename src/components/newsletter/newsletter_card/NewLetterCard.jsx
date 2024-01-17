import React from 'react'
import './newsletterCard.scss'
import Link from "next/link";
import Image from 'next/image'
const NewLetterCard = ({data}) => {
    return (
        <>
            <div className={'newsletter-card-container'}>
                <div className={'newsletter-text'}>
                    <div className={'newsletter-img'}>
                        <Image src={data.publicImg} alt={'card image'} fill sizes={'100%'}/>
                    </div>
                    <h3 className={'newsDetails-title'}>
                        {data.title}
                    </h3>
                    <p>
                        {data.desc}
                    </p>
                </div>
                <div className={'newsletter-read-more-btn'}>
                    <Link href={data.srcLink} target={'_blank'}>Read More...</Link>
                </div>
            </div>
        </>
    )
}
export default NewLetterCard
