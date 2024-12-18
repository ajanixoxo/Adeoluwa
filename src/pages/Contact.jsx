import React from 'react'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Grouped from '../components/Grouped'

const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/ajanixoxo/", label: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/adeoluwa-gbenro-8590b9251/", label: "LinkedIn" },
    { icon: <Twitter className="w-6 h-6" />, href: "https://x.com/Dexcoded01", label: "Twitter" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:joelayomide35@gmail.com", label: "Email" },
    {
        icon: <svg version="1.0" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
            width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
                Created by potrace 1.10, written by Peter Selinger 2001-2011
            </metadata>
            <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                fill="white" stroke="none">
                <path d="M1445 2813 c-464 -29 -854 -267 -1086 -665 -113 -194 -170 -415 -170
   -658 1 -206 47 -402 138 -583 l44 -88 -86 -311 c-47 -171 -84 -312 -83 -314 3
   -2 500 127 597 155 30 9 44 5 125 -34 104 -50 212 -87 329 -112 115 -25 390
   -25 504 0 267 57 483 175 674 366 119 120 181 204 249 341 90 180 129 330 137
   535 14 339 -94 648 -318 914 -204 243 -552 423 -864 446 -44 3 -93 7 -110 9
   -16 1 -52 1 -80 -1z m288 -79 c241 -46 459 -159 638 -331 156 -151 259 -311
   323 -503 108 -325 84 -663 -69 -967 -283 -562 -924 -826 -1525 -627 -57 19
   -138 53 -180 75 l-75 40 -265 -69 c-146 -38 -274 -73 -284 -78 -16 -6 -18 -4
   -13 12 3 10 38 137 78 280 l72 262 -45 88 c-98 190 -140 362 -140 574 -1 157
   18 279 63 408 173 488 582 805 1104 856 65 6 234 -5 318 -20z"/>
                <path d="M975 2192 c-47 -29 -105 -99 -133 -161 -30 -66 -40 -180 -23 -262 26
   -119 139 -298 296 -466 152 -164 309 -266 528 -345 101 -36 122 -41 205 -41
   86 0 98 3 166 36 85 43 150 107 165 165 19 70 22 126 9 151 -17 31 -276 162
   -334 169 -39 4 -43 2 -80 -44 -21 -26 -55 -65 -74 -87 l-36 -39 -56 25 c-137
   61 -286 189 -373 320 l-38 58 30 32 c50 52 83 108 83 140 0 44 -116 318 -146
   345 -33 29 -143 32 -189 4z m221 -196 c72 -169 72 -160 -7 -249 -56 -65 -55
   -88 7 -180 99 -146 249 -269 406 -333 64 -26 68 -26 93 -10 14 9 53 50 86 91
   l61 74 32 -13 c17 -8 84 -39 149 -71 132 -64 131 -63 102 -163 -17 -57 -66
   -106 -144 -143 -73 -35 -190 -32 -308 9 -286 98 -504 273 -696 561 -91 136
   -125 249 -106 355 15 83 43 138 95 186 43 40 46 41 106 38 l61 -3 63 -149z"/>
            </g>
        </svg>,
        href: 'https://api.whatsapp.com/send/?phone=%2B2349130300630&text&type=phone_number&app_absent=0',
        label: "WhatsApp"

    }
]

function Contact() {
    return (
        <section className="relative py-24 " id="contact">
            <Grouped titleO="<contact>" titleC="</contact>" />
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-8  mt-5 text-center">Get in Touch</h2>
                <div className="flex justify-center space-x-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-purple-500 transition-colors duration-300"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact