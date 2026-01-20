import React from 'react';
import Hero from '../../UI/Hero/Hero';
import H1 from '../../UI/Typography/H1';
import H2 from '../../UI/Typography/H2';
import P from '../../UI/Typography/P';

export default function Introduction({
    className,
    image,
    title,
    subtitle,
    description,
}) {
    const imageSize = "clamp(110px, 22vw, 150px)";
    const imageHeight = "clamp(160px, 28vw, 200px)";



    return (
        <Hero className={`intro-hero ${className}`}>
            <div
                style={{
                    display:"flex",
                    alignItems:"center",
                    gap: "clamp(1rem, 3vw, 2rem)"
                }}
            >

                <div
                    style={{
                        width: imageSize,
                        height: imageHeight,
                        borderRadius: ".75rem",
                        overflow: "hidden",
                        flexShrink: 0,
                        border:"1px solid lightgray"
                    }}
                >
                    <img 
                        src={image} 
                        alt={title} 
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition:"top",
                            display: "block",
                        }}
                    />
                </div>


                <div
                    style={{
                        display:"flex",
                        flexDirection:"column",
                        gap: "clamp(0.5rem, 2vw, 0.75rem)",
                        flex: 1,
                        minWidth: 0,   

                    }}
                >
                    <H1>
                        {title}
                    </H1>
                    <H2>
                        {subtitle}
                    </H2>
                    <P>
                        {description}
                    </P>

                </div>
            </div>
        </Hero>
    );
}
