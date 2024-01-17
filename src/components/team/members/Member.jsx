import styles from './member.module.css'
import Heading1 from "@/components/utilities/Heading1";
import RevealWrapper from "@/components/animations/RevealWrapper";

const Member = ({members}) => {
  return (
    <>
      {
        members && (
          <div className={`${styles.container}`}>
            <RevealWrapper>
              <Heading1>MEMBERS</Heading1>
            </RevealWrapper>
            <div className={`${styles.__innerContainer}`}>
              {
                Object.keys(members).map((subsystem, index) => {
                  return <div key={index} className={`${styles.section}`}>
                    <h3 className={`${styles.subsystem}`}>{subsystem}</h3>
                    <div className={`${styles.names}`}>
                      {
                        members[subsystem].map((name, index) => {
                          return <span key={index} className={`${styles.name}`}>{name}</span>
                        })
                      }
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        )
      }
    </>
  )
}
export default Member
