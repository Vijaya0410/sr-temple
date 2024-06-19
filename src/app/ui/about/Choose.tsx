'use client'
/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React from 'react';


// eslint-disable-next-line react/function-component-definition
const Choose: React.FC = () => (
  <div className="px-4 py-5 md:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 lg:mb-4">
      <div className="max-w-xl mb-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-10">
        <div>
        </div>
        <motion.h2
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }} className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Get</span>
          </span>{' '}
          to know the reasons you should choose us!
        </motion.h2>
        <motion.p
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut',
        }} 
        className="text-base text-gray md:text-lg">
        Our innovative solutions and attention to detail ensure that every project exceeds our clients' expectations, building trust and lasting relationships.
        </motion.p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2 md:mb-0">
        <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeIn',
        }}
         className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-semibold leading-5 text-white">Innovative Design</h6>
            <p className="text-sm text-white">
            We prioritize customer satisfaction, achieved through our innovative designs and top-tier construction standards.
            </p>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeIn',
        }} className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-semibold leading-5 text-white">Optimal Cost Estimation</h6>
            <p className="text-sm text-white">
            While constructing masterpieces, cost is a crucial factor. We offer comprehensive temple construction services at the most competitive prices
            </p>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeIn',
        }} className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-semibold leading-5 text-white">
            Experienced Professionals and Skilled Workforce
            </h6>
            <p className="text-sm text-white">
            Experience is paramount. Our seasoned workforce ensures efficient execution and timely project completion."
            </p>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 100 }} // X:100
        whileInView={{ opacity: 1, y: 1 }} // y:100
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeIn',
        }} className="duration-300 transform bg-white border-l-4 border-yellow hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-gray">
            <h6 className="mb-2 font-semibold leading-5 text-white">Sustainable Practices</h6>
            <p className="text-sm text-white">
            We incorporate eco-friendly practices and sustainable materials to minimize environmental impact and promote long-term sustainability.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
);

export default Choose;
