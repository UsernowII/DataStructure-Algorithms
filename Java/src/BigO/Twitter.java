package BigO;

import java.util.ArrayList;
import java.util.List;

public class Twitter {

    public static void main(String[] args) {

        List<Tweet> tweets = new ArrayList<>() ;

        tweets.add(new Tweet("hi", 2012));
        tweets.add(new Tweet("my", 2014));
        tweets.add(new Tweet("teddy", 2018));

        //Find 1st , FInd Nth


    }
}

class Tweet{

    String tweet;
    int date;

    public Tweet(String tweet, int date) {
        this.tweet = tweet;
        this.date = date;
    }
}
