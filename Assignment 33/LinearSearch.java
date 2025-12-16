public class LinearSearch{
    public static void main(String[] args) {
        int[] a={1,3,2,5,1,7,8,1,2,9};
        int x=1;
        int count=0;
        for(int i=0;i<a.length;i++){
            if(a[i]==x){
                count++;
            }
        }
        System.out.println(count);
    }
}