# Sorting Algorithms and Binary Search

>* Stable sorting
>* Selection sort

## Stable sorting

It does not change the relative
order of items whose keys are equal.

A sorting algorithm is stable iff,
after it sorts an array, any two records that
compare equal, will still be in the same
relative order as they were before sorting.

<br/>
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#9ABAD9;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#9ABAD9;color:#444;background-color:#EBF5FF;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#9ABAD9;color:#fff;background-color:#409cff;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-nrix{text-align:center;vertical-align:middle}
</style>
<table class="tg">
  <tr>
    <th class="tg-nrix" colspan="5">Sort based on</th>
  </tr>
  <tr>
    <td class="tg-baqh" colspan="5">Tom before Jane and Bob before Anna</td>
  </tr>
  <tr>
    <td class="tg-nrix">4</td>
    <td class="tg-nrix">3</td>
    <td class="tg-nrix">4</td>
    <td class="tg-baqh">3</td>
    <td class="tg-baqh">1</td>
  </tr>
  <tr>
    <td class="tg-nrix">Bob</td>
    <td class="tg-nrix">Tom</td>
    <td class="tg-nrix">Anna</td>
    <td class="tg-baqh">Jane</td>
    <td class="tg-baqh">Henry</td>
  </tr>
</table>
<br/>

<br/>
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#9ABAD9;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#9ABAD9;color:#444;background-color:#EBF5FF;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#9ABAD9;color:#fff;background-color:#409cff;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-nrix{text-align:center;vertical-align:middle}
</style>
<table class="tg">
  <tr>
    <th class="tg-nrix" colspan="5">Stable sort</th>
  </tr>
  <tr>
    <td class="tg-baqh" colspan="5">Tom before Jane and Bob before Anna</td>
  </tr>
  <tr>
    <td class="tg-nrix">1</td>
    <td class="tg-nrix">3</td>
    <td class="tg-nrix">3</td>
    <td class="tg-baqh">4</td>
    <td class="tg-baqh">4</td>
  </tr>
  <tr>
    <td class="tg-nrix">Henry</td>
    <td class="tg-nrix">Tom</td>
    <td class="tg-nrix">Jane</td>
    <td class="tg-baqh">Bob</td>
    <td class="tg-baqh">Anna</td>
  </tr>
</table>
<br/>

<br/>
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#9ABAD9;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#9ABAD9;color:#444;background-color:#EBF5FF;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#9ABAD9;color:#fff;background-color:#409cff;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-nrix{text-align:center;vertical-align:middle}
</style>
<table class="tg">
  <tr>
    <th class="tg-nrix" colspan="5">Unstable sort</th>
  </tr>
  <tr>
    <td class="tg-baqh" colspan="5">Anna is now before Bob</td>
  </tr>
  <tr>
    <td class="tg-nrix">1</td>
    <td class="tg-nrix">3</td>
    <td class="tg-nrix">3</td>
    <td class="tg-baqh">4</td>
    <td class="tg-baqh">4</td>
  </tr>
  <tr>
    <td class="tg-nrix">Henry</td>
    <td class="tg-nrix">Tom</td>
    <td class="tg-nrix">Jane</td>
    <td class="tg-baqh">Anna</td>
    <td class="tg-baqh">Bob</td>
  </tr>
</table>
<br/>


## Selection sort

1. find the first minimum element and store the element at array[0].
2. find the second minimum element and store the element at array[1].
3. find the i th minimum element and store the element at array[i - 1].

```c
// C program for implementation of selection sort
#include <stdio.h>

void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void selectionSort(int arr[], int n)
{
	int i, j, min_idx;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in unsorted array
		min_idx = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element with the first element
		swap(&arr[min_idx], &arr[i]);
	}
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i=0; i < size; i++)
		printf("%d ", arr[i]);
	printf("\n");
}

// Driver program to test above functions
int main()
{
	int arr[] = {64, 25, 12, 22, 11};
	int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr, n);
	printf("Sorted array: \n");
	printArray(arr, n);
	return 0;
}

```

## [Youtube selection sort algorithm](https://www.youtube.com/watch?v=GUDLRan2DWM&list=PL2_aWCzGMAwKedT2KfDMB9YA5DgASZb3U&index=2)

Let's say that we have an array

|    2    |    7    |    4    |    1    |    5    |    3    |
|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| index 0 | index 1 | index 2 | index 3 | index 4 | index 5 |

We need to look for the minimum number, which is 1.
We swap the value of index 0 and index 3.

|    1    |    7    |    4    |    2   |    5    |    3    |
|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| index 0 | index 1 | index 2 | index 3 | index 4 | index 5 |

We would also look for the next minimum number, which is 2.
We swap the value of index 3 and index 1. We would continue to
do this until all the numbers are sorted.

|    1    |    2    |    3    |    4   |    5    |    7    |
|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| index 0 | index 1 | index 2 | index 3 | index 4 | index 5 |
























