import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>
            How to play dice game
        </h2>
        
        <div className="text">
        
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After clicking in dice if the selected number is same as number on diceyou get same point as number selected</p>
        <p>Otherwise your points get deducted by 2</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
   background-color: #fbf1f1;
   padding: 20px;
   max-width: 800px;
   margin: 0 auto;
   margin-top: 40px;
   border-radius: 10px;
   
   h2{
    font-size: 24px;
   }

   .text{
    margin-top: 24px;
   }

    
`