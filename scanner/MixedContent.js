/**
 * Copyright 2011 Google Inc. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

DOMSnitch.Scanner.MixedContent = function() {
  this._checks = {
    "script.src": this._checkScriptSource.bind(this)
  };
}

DOMSnitch.Scanner.MixedContent.prototype = new DOMSnitch.Scanner.Base;

DOMSnitch.Scanner.MixedContent.prototype._checkScriptSource = function(record) {
  var code = DOMSnitch.Scanner.STATUS.NONE;
  var notes = "";
  var location = record.env.location;

  if(location.indexOf("https://") == 0 && record.data.indexOf("http://") == 0) {
    code = DOMSnitch.Scanner.STATUS.HIGH;
    notes = "Found mixed content.\n";
  }

  return {code: code, notes: notes};
}