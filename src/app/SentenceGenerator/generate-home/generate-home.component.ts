import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SenDto } from '../SenDto';
import {FormGroup, FormControl} from '@angular/forms';
import { KeyValuePair } from '../KeyValuePair';

@Component({
  selector: 'app-generate-home',
  template: `
    <body class="font-sans">
    <Form [formGroup]="SentenceGenerationForm" (ngSubmit)="onSubmit()">
        <div class="max-w-6xl mx-auto p-10 border-2 border-black">
            <h1>Word List Processor</h1>
            <label class="font-bold" for="numQuestions">Number of Sentences:</label>
            <input formControlName="NumberOfSentences" type="number" id="numQuestions"
                class="w-full py-2 px-4 mb-4 border border-black rounded-md"
                placeholder="Enter number of Sentences">

            <label class="font-bold">Complexity</label>
            <div class="flex justify-between border-2 border-black font-bold mb-8">
                <div class="easy">
                    <label class="Easy-label">Easy:</label>
                    <input type="radio" class="radio" name="Complexity">
                </div>
                <div class="normal">
                    <label class="Normal-label">Normal:</label>
                    <input type="radio" class="radio" name="Complexity">
                </div>
                <div class="complex">
                    <label class="Complex-label">Complex</label>
                    <input type="radio" class="radio" name="Complexity">
                </div>
            </div>

            <label class="font-bold" for="wordList">List of Words:</label>
            <textarea formControlName="WordListString" id="wordList"
                class="w-full py-2 px-4 mb-4 border border-black rounded-md"
                placeholder="Paste your list of words here (one word per line)"></textarea>

            <label class="font-bold" for="outputSentences">Generated Sentences:</label>
            <textarea formControlName="GeneratedSentences" id="outputSentences"
                class="w-full h-40 py-2 px-4 mt-4 border border-gray-300 rounded-md" readonly></textarea>

            <button class="py-2 px-4 bg-blue-500 text-white rounded-md">Generate</button>
        </div>
    </Form>
</body>

  `,
  styles: [
  ]
})
export class GenerateHomeComponent {

  SentenceGenerationForm: FormGroup;
  NumberOfSentences: FormControl;
  WordListString: FormControl;
  GeneratedSentences: FormControl;
  constructor(private http: HttpClient) 
  {
    this.NumberOfSentences = new FormControl();
    this.WordListString = new FormControl();
    this.GeneratedSentences = new FormControl();
    this.SentenceGenerationForm = new FormGroup({
      NumberOfSentences: this.NumberOfSentences,
      WordListString: this.WordListString,
      GeneratedSentences: this.GeneratedSentences,
    });

  }
  onSubmit():void
  {
    
    this.generateQuestions(this.SentenceGenerationForm.value.NumberOfSentences, this.SentenceGenerationForm.value.WordListString);
  }
  generateQuestions(numQuestions: number, wordList: string): void {
    // Split the wordList string into an array of words
    const words = wordList.split('\n').map(word => word.trim());
    let SenDto = 
    {
      num: numQuestions,
      words: words,
      data: []
    }
    // Make an HTTP POST request to your endpoint
    this.http.post<SenDto>('http://localhost:8080/generate', SenDto).subscribe((obj: any) =>
    {
      const typeMap: KeyValuePair[] = obj as KeyValuePair[];

      let resultString = "";
      Array.from(typeMap.keys()).forEach(index => {
        resultString += typeMap[index].key + "\n";
      });
      console.log(resultString);
      this.SentenceGenerationForm.patchValue({
        GeneratedSentences: resultString
      });
    }
    );
  }
}
