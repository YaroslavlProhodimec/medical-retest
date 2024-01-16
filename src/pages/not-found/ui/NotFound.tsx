import React from "react";
import styles from "./styles.module.scss";
import {motion} from 'framer-motion';
import {TypeAnimation} from "react-type-animation";
import {Link} from "react-router-dom";
import { fadeIn } from "../../../shared/utils";

export const NotFound = () => {
  return (
    <>

      <div className={styles.error}>
        <motion.div variants={fadeIn('right',0.4)} initial='hidden' whileInView={'show'}
                    viewport={{once:false,amount:0.7}} className={styles.span}>
          <span className={styles.span}>Opps </span>
          <TypeAnimation sequence={['Ничего', 2000,
            ' не найдено!', 2000
          ]} speed={50} />

        </motion.div>

        <motion.div variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'}
                    className={styles.img}>
          <img className={styles.img}  src={'https://raw.githubusercontent.com/YaroslavlProhodimec/sneakers-toolkit/6543b4e0038817e63d4db184d832066ddea44425/sneakers-toolkit/src/components/pages/notFound404/400.svg'} alt=""/>
        </motion.div>
        <Link to={'/'}> <motion.button className={styles.button} variants={fadeIn('right',0.4)} initial='hidden' whileInView={'show'}
                                       viewport={{once:false,amount:0.7}} >To back</motion.button></Link>
      </div>

    </>
  );
};
