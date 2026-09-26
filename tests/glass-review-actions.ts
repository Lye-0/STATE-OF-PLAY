import type {Locator,Page} from 'playwright';
/** Exercise the actual native controls, including surfaces created after expansion. */
export async function exerciseGlass(page:Page,root:Locator,detail:Locator,category:string,capture:()=>Promise<void>):Promise<string[]> {
 const actions:string[]=[];
 const clickAll=async(selector:string,scope=root)=>{const count=await scope.locator(selector).count();for(let i=0;i<count;i++){const item=scope.locator(selector).nth(i);if(!await item.count()||!await item.isVisible()||!await item.isEnabled()||await item.getAttribute('aria-disabled')==='true')continue;await item.click();actions.push(selector+':'+i);}};
 const click=async(selector:string,scope=root)=>{const item=scope.locator(selector).filter({visible:true}).first();if(await item.count()&&await item.isEnabled()){await item.click();actions.push(selector);return true}return false;};
 const fill=async(selector:string,value:string,scope=root)=>{const item=scope.locator(selector).filter({visible:true}).first();if(await item.count()&&await item.isEnabled()){await item.fill(value);actions.push(selector+'='+value);}};
 await root.evaluate(el=>el.addEventListener('click',event=>{if((event.target as Element).closest('a'))event.preventDefault();},{capture:true}));
 switch(category){
  case 'toggles': case 'buttons': case 'links':await root.click();actions.push('root click');await page.waitForTimeout(category==='buttons'?900:100);await capture();if(category==='toggles'){await root.press('Space');actions.push('Space');}break;
  case 'blocks':await clickAll('button');await capture();break;
  case 'scrollbars':await root.locator('.sop-scroll-viewport').evaluate(el=>el.scrollTop=el.scrollHeight/2);actions.push('scroll');await detail.locator('#scroll-orientation').selectOption('horizontal');actions.push('horizontal');await capture();await detail.locator('#scroll-orientation').selectOption('vertical');break;
  case 'textboxes':await fill('input:not([type=hidden]),textarea','日本語の入力を確認');await capture();await fill('input:not([type=hidden]),textarea','');break;
  case 'accordions':await clickAll('.sop-accordion-trigger');await capture();await clickAll('.sop-accordion-trigger');break;
  case 'dropdowns': case 'comboboxes':{
   const trigger=category==='dropdowns'?'.sop-select-trigger':'[data-combo-toggle]';await click(trigger);await capture();
   const options=root.locator('[role=option]');const count=await options.count();for(let i=0;i<count;i++){if(!await options.nth(i).isVisible())await click(trigger);if(await options.nth(i).isVisible()&&await options.nth(i).getAttribute('aria-disabled')!=='true'){await options.nth(i).click();actions.push('option '+i);}}
   await root.evaluate(el=>el.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true})));break;
  }
  case 'tabs':await clickAll('[role=tab]');await capture();break;
  case 'segments':await clickAll('.sop-choice-item');await capture();break;
  case 'checkboxes':await root.locator('input[type=checkbox]').check({force:true});await capture();await root.locator('input[type=checkbox]').uncheck({force:true});actions.push('check/uncheck');break;
  case 'popups':await click('[data-popup-open]');await capture();await click('[data-popup-close="close"]');await click('[data-popup-open]');await click('[data-popup-close="confirm"]');break;
  case 'sliders':await fill('input[type=range]','20');await capture();await fill('input[type=range]','80');break;
  case 'radios':await clickAll('.ff-choice:not(:has(input:disabled))');await capture();break;
  case 'toasts':await click('[data-notify]');await capture();await click('[data-notice-close]');break;
  case 'hints':await click('[data-hint-trigger]');await capture();await clickAll('.ff-floating button');await root.evaluate(el=>el.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true})));break;
  case 'progress':await clickAll('.foundation-inline-demo button',detail);await capture();break;
  case 'uploads':await root.locator('input[type=file]').setInputFiles({name:'review.txt',mimeType:'text/plain',buffer:Buffer.from('Glass review')});actions.push('file selection');await capture();await clickAll('button');break;
  case 'datepickers':await click('[data-calendar-toggle]');await capture();await click('[data-month="next"]');await click('[data-month="prev"]');await click('[data-day]:not([disabled])');await click('[data-calendar-toggle]');await click('[data-date-clear]');await root.evaluate(el=>el.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true})));break;
  case 'pagination':await clickAll('[data-page]:not([disabled])');await capture();break;
  case 'breadcrumbs':await click('[data-crumb-more]');await capture();await clickAll('.ff-crumb-menu a');await root.evaluate(el=>el.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true})));break;
  case 'badges':await clickAll('.ff-tag label:not(:has(input:disabled))');await capture();await clickAll('[data-tag-remove]');break;
  case 'numbers':await clickAll('button');await fill('input','5');await root.locator('input').press('ArrowUp');actions.push('number keyboard');await capture();break;
  case 'avatars':await clickAll('button');await capture();break;
  case 'ratings':await clickAll('[data-rank]:not(:has(input:disabled))');await capture();await click('.sg-rating-clear');break;
  case 'colors':await clickAll('.sg-color-swatches button');await fill('input[type=range]','120');await capture();break;
  case 'skeletons':await detail.locator('input[data-sg-loading]').uncheck();actions.push('loaded');await capture();await detail.locator('input[data-sg-loading]').check();break;
  case 'timelines':await clickAll('summary');await capture();await clickAll('summary');break;
  case 'wizards':await fill('input','Glass studio');await click('[data-wizard-next]');await capture();await clickAll('input[type=radio]');await click('[data-wizard-next]');await click('[data-wizard-prev]');break;
  case 'searchbars':await fill('input[type=search]','Design');await click('.wb-search-submit');await capture();await fill('input[type=search]','');await clickAll('[data-filter]');break;
  case 'commands':await click('.wb-command-launch');await capture();await fill('.wb-command-input','');await root.locator('.wb-command-input').press('ArrowDown');actions.push('command keyboard');await root.locator('.wb-command-input').press('Enter');await click('.wb-command-close');break;
  case 'contextmenus':await click('.wb-context-open');await capture();await click('[data-menu-action][aria-haspopup=menu]');await capture();await click('[data-menu-back]');await click('[role=menuitemcheckbox]');await root.evaluate(el=>el.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true})));break;
  case 'navigation':await clickAll('.wb-nav-desktop [data-nav]');await click('[data-nav-group]');await capture();await clickAll('.wb-nav-flyout a');await root.evaluate(el=>el.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true})));await click('.wb-nav-mobile-open');await capture();await clickAll('.wb-nav-dialog summary');await click('.wb-nav-mobile-close');break;
  case 'tables':await clickAll('[data-sort]');await fill('input[type=search]','Design');await click('[data-row-check]');await fill('input[type=search]','');await click('[data-table-page=next]');await capture();await click('[data-table-page=prev]');await root.locator('[data-resize]').first().press('ArrowRight');actions.push('resize keyboard');break;
 }
 return actions;
}
