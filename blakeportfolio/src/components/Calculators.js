function Calculator(props){
    
    return(
    
<div class="productsContainer">

    <div class="ItemContainer">
        <div class="grid-container">
            <div class="gridItemLeft">
                <div class="titleB">Voltage current and resistance calculator</div>
            </div>

            

            <div class="gridItemBottom">
                
                <form oninput="crnt.value=parseFloat(vlt.value)/parseFloat(rst.value)">
                    
                
                    
                    
                    <label for="vlt">Voltage&#40;V&#41;</label>
                    <input type="number" id="vlt" name="voltage" value="1"/>
                
                    <br/><label for="rst">Resistance&#40;Ohm&#41;</label>
                    <input type="number" id="rst" name="resistance" value="1"/>
                
                    <br/>current&#40;Amps&#41; = <output name="crnt" for="vlt rst"></output>
                </form>




            </div>
        </div>
    </div>

    <div class="ItemContainer">
        <div class="grid-container">
            <div class="gridItemLeft">
                <div class="titleB">Resistor 4 Band Translation</div>
            </div>

            <div class="gridItemLRight">
                <img class="gridImage" src="4band.jpg" alt="four band resistor"/>
            </div>

            

            <div class="gridItemBottom">
            
                <form oninput="outputResistance.value=(((parseFloat((band1.value)+(band2.value)))*(parseFloat(band3.value))).toString())+band4.value">
        

                    <label for="cars">Band 1 Color</label>
                    <select id="band1" name="band1">
                        <option value="0">Black</option>
                        <option value="1">Brown</option>
                        <option value="2">Red</option>
                        <option value="3">Orange</option>
                        <option value="4">Yellow</option>
                        <option value="5">Green</option>
                        <option value="6">Blue</option>
                        <option value="7">Violet</option>
                        <option value="8">Gray</option>
                        <option value="9">White</option>
                    </select><br/>
            
            
                    <label for="cars">Band 2 Color</label>
                    <select id="band2" name="band2">
                        <option value="0">Black</option>
                        <option value="1">Brown</option>
                        <option value="2">Red</option>
                        <option value="3">Orange</option>
                        <option value="4">Yellow</option>
                        <option value="5">Green</option>
                        <option value="6">Blue</option>
                        <option value="7">Violet</option>
                        <option value="8">Gray</option>
                        <option value="9">White</option>
                    </select><br/>
            
            
                    <label for="cars">Band 3 Color</label>
                    <select id="band3" name="band3">
                        <option value="1">Black</option>
                        <option value="10">Brown</option>
                        <option value="100">Red</option>
                        <option value="1000">Orange</option>
                        <option value="10000">Yellow</option>
                        <option value="100000">Green</option>
                        <option value="1000000">Blue</option>
                        <option value="10000000">Violet</option>
                        <option value="100000000">Gray</option>
                        <option value="1000000000">White</option>
                        <option value="0.1">Gold</option>
                        <option value="0.01">Silver</option>
                    </select><br/>
            
            
            
                    <label for="cars">Band 4 Color</label>
                    <select id="band4" name="band4">
                        <option value=" +/-1%">Brown</option>
                        <option value=" +/-2%">Red</option>
                        <option value=" +/-0.5%">Green</option>
                        <option value=" +/-0.25%">Blue</option>
                        <option value=" +/-0.10%">Violet</option>
                        <option value=" +/-0.05%">Gray</option>
                        <option value=" +/-5%">Gold</option>
                        <option value=" +/-10%">Silver</option>
                    </select><br/>
            
                    Resistance Value(Ohms) = <output name="outputResistance" for="band1 band2 band3 band4"></output>
            
                    
                </form>
            </div>
        </div>
    </div>




    <div class="ItemContainer">
        <div class="grid-container">
            <div class="gridItemLeft">
                <div class="titleB">Resistor 5 Band Translation</div>
            </div>

            

            <div class="gridItemBottom">
                
                <form oninput="outputResistance.value=(((parseFloat((band1.value)+(band2.value)+(band3.value)))*(parseFloat(band4.value))).toString())+band5.value">
        

                    <label for="cars">Band 1 Color</label>
                    <select id="band1" name="band1">
                        <option value="0">Black</option>
                        <option value="1">Brown</option>
                        <option value="2">Red</option>
                        <option value="3">Orange</option>
                        <option value="4">Yellow</option>
                        <option value="5">Green</option>
                        <option value="6">Blue</option>
                        <option value="7">Violet</option>
                        <option value="8">Gray</option>
                        <option value="9">White</option>
                    </select><br/>
            
            
                    <label for="cars">Band 2 Color</label>
                    <select id="band2" name="band2">
                        <option value="0">Black</option>
                        <option value="1">Brown</option>
                        <option value="2">Red</option>
                        <option value="3">Orange</option>
                        <option value="4">Yellow</option>
                        <option value="5">Green</option>
                        <option value="6">Blue</option>
                        <option value="7">Violet</option>
                        <option value="8">Gray</option>
                        <option value="9">White</option>
                    </select><br/>

                    <label for="cars">Band 3 Color</label>
                    <select id="band3" name="band3">
                        <option value="0">Black</option>
                        <option value="1">Brown</option>
                        <option value="2">Red</option>
                        <option value="3">Orange</option>
                        <option value="4">Yellow</option>
                        <option value="5">Green</option>
                        <option value="6">Blue</option>
                        <option value="7">Violet</option>
                        <option value="8">Gray</option>
                        <option value="9">White</option>
                    </select><br/>
            
            
                    <label for="cars">Band 4 Color</label>
                    <select id="band4" name="band4">
                        <option value="1">Black</option>
                        <option value="10">Brown</option>
                        <option value="100">Red</option>
                        <option value="1000">Orange</option>
                        <option value="10000">Yellow</option>
                        <option value="100000">Green</option>
                        <option value="1000000">Blue</option>
                        <option value="10000000">Violet</option>
                        <option value="100000000">Gray</option>
                        <option value="1000000000">White</option>
                        <option value="0.1">Gold</option>
                        <option value="0.01">Silver</option>
                    </select><br/>
            
            
            
                    <label for="cars">Band 5 Color</label>
                    <select id="band5" name="band5">
                        <option value=" +/-1%">Brown</option>
                        <option value=" +/-2%">Red</option>
                        <option value=" +/-0.5%">Green</option>
                        <option value=" +/-0.25%">Blue</option>
                        <option value=" +/-0.10%">Violet</option>
                        <option value=" +/-0.05%">Gray</option>
                        <option value=" +/-5%">Gold</option>
                        <option value=" +/-10%">Silver</option>
                    </select><br/>
            
                    Resistance Value(Ohms) = <output name="outputResistance" for="band1 band2 band3 band4"></output>
            
                    
                </form>
                
        </div>
    </div>

</div>
</div>



    );
    
}
    
    export default Calculator;







