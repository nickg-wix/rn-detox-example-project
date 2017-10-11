describe('Robot Selector', ()=> {
    beforeEach(async()=>{
        await device.reloadReactNative();
        await element(by.id('hello_button')).tap();
    });
    
    it('should have choose robot title', async()=> {
        await expect(element(by.id('robot_selector_label'))).toBeVisible()
    });
    
    it('should select last item in list', async()=> {
        const picker = element(by.id('robot_selector_picker'));
        const textLabel = 'Bender';
        
        await picker.tap();
        await picker.scrollTo('bottom');
        
        await element(by.text(textLabel)).tap();
        await expect(element(by.id('robot_selector_good_indicator'))).toHaveText(textLabel);
    });
    
    it('indicator state color changes', async()=> {
        const indicator = element(by.id('robot_selector_is_good_toggle'));
        
        await element(by.text('Liubot')).tap();
        await expect(indicator).toHaveValue('1');
        await indicator.tap();
        await expect(element(by.id('robot_selector_bad_indicator'))).toBeVisible();
        await expect(indicator).toHaveValue('0');
    });
});