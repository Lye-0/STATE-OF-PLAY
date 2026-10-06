import type {Locator} from 'playwright';
/** Drive the visible inspector listbox; also supports older native settings controls. */
export async function selectSetting(select:Locator,value:string){
 if(await select.isVisible()){await select.selectOption(value);return;}
 const root=select.locator('xpath=following-sibling::*[1]');
 const trigger=root.locator('[role=combobox]');
 if(await select.inputValue()===value)return;
 if(await trigger.getAttribute('aria-expanded')!=='true')await trigger.click();
 await root.locator(`[role=option][data-value="${value}"]`).click();
}
